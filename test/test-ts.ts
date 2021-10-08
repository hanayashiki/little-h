import { h, useRef, useEffect } from "../";

export function Parent() {
  const ref = useRef(1);
  ref.current = 1;

  // @ts-expect-error
  ref.current = "123";

  useEffect(() => {
    console.log('ok');
    ref.current = 2;
  }, []);

  return h("div", {}, h(Child), h(Child2, { a: "a" }));
}

function Child() {
  return h("div");
}

function Child2({ a }: { a: string }) {
  return h("div", {}, a);
}
