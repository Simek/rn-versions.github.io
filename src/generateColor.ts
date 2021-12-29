import randomSeed from "random-seed";

export type AvoidToken = {
  adjacentHue: number;
  allHues: number[];
};

/**
 * Generates a color with random distribution, stable for a given semver
 * version. Allows passing an `avoidToken` generated by a previous color, to avoid a color similar
 * to it.
 *
 * * Derived from:
 * - http://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
 * - https://github.com/devongovett/color-generator
 */
export default function generateColor(
  version: string,
  avoidToken?: AvoidToken
): { color: string; avoidToken: AvoidToken } {
  const adjacentHueThreshold = 0.25;
  const allHueThreshold = 0.05;

  const goldenRatio = 0.618033988749895;

  const randomGenerator = randomSeed.create(version);
  let hue: number;
  let triesRemaining = 100;

  do {
    hue = randomGenerator.random();
    hue += goldenRatio;
    hue %= 1;
  } while (
    avoidToken &&
    --triesRemaining > 0 &&
    (hueDifference(hue, avoidToken.adjacentHue) < adjacentHueThreshold ||
      avoidToken.allHues.find(
        // eslint-disable-next-line no-loop-func
        (otherHue) => hueDifference(hue, otherHue) < allHueThreshold
      ))
  );

  const saturation = 0.6;
  const value = 0.95;

  const h = hue * 360;
  const s = saturation * 100;
  const v = value * 100;

  return {
    color: cssColorFromHsv(h, s, v),
    avoidToken: {
      adjacentHue: hue,
      allHues: [...(avoidToken?.allHues ?? []), hue],
    },
  };
}

function cssColorFromHsv(hue: number, sat: number, val: number) {
  const h = hue;
  const l = ((2 - sat / 100) * val) / 2;
  const s = (sat * val) / (l < 50 ? l * 2 : 200 - l * 2);

  return `hsl(${h}, ${Math.round(s)}%, ${Math.round(l)}%)`;
}

function hueDifference(hue1: number, hue2: number) {
  return Math.abs(((hue1 - hue2 + 0.5) % 1.0) - 0.5);
}
