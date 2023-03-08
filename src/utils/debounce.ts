type anyFunc = (...args: any[]) => any;

export default function debounce<T extends anyFunc>(foo: T, time: number) {
  let timer: ReturnType<typeof setInterval> | null;
  return function inner(...args: unknown[]) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(foo, time, ...args);
  };
}
