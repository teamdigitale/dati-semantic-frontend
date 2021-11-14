/**
 * Simple utility to resolve a promise after a delay, to simulate network interaction...
 *
 * @param resultProvider a function that provides a result
 * @param maxTimeout maximum timeout: the timeout will be random between 0 and this value (in ms)
 * @returns {Promise<unknown>} a promise for the same type of the value produced by the provider.
 */
export function resolveDelayed(resultProvider, maxTimeout) {
  return new Promise((resolve) => {
    const timeout = Math.random() * maxTimeout;
    setTimeout(() => resolve(resultProvider.call()), timeout);
  });
}
