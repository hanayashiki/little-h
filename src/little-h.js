let currentComponent = undefined;
let currentSlot = 0;

export const createElement = (
  tag,
  props = {},
  ...children
) => {
  if (typeof tag === 'string') {
    return createHtmlElement(tag, props, ...mapChildren(children));
  } else {
    return createComponentElement(tag, props, ...mapChildren(children));
  }
};

export const h = createElement;

export const mapChildren = (children) => {
  return (
    children.map(child => {
      if (typeof child === "string" || typeof child === "number" || typeof child === "boolean") {
        return createTextElement(String(child));
      } else {
        return child;
      }
    })
  );
};

export const createTextElement = (
  text,
) => {
  return {
    type: 'Text',
    text,
    render() {
      return document.createTextNode(text);
    }
  };
};

export const createHtmlElement = (
  tag,
  props = {},
  ...children
) => {
  return {
    tag,
    type: 'HtmlElement',
    props,
    children,
    render() {
      /** @type HTMLElement */
      const container = document.createElement(tag);
      for (const child of children) {
        if (child) {
          container.appendChild(child.render());
        }
      }
      Object.keys(props).forEach(key => {
        if (key === 'ref') {
          props[key].current = container;
        } else if (key.startsWith('on')) {
          container.addEventListener(key.slice(2).toLowerCase(), props[key]);
        } else {
          container.setAttribute(key, props[key]);
        }
      });
      return container;
    },
  }
};

export const createComponentElement = (
  renderFunction,
  props = {},
  ...children
) => {
  return {
    type: 'ComponentElement',
    props,
    slots: [],
    effects: [],
    children: mapChildren(children),
    render() {
      let oldCurrentComponent = currentComponent;
      currentSlot = 0;
      currentComponent = this;
      const vdom = renderFunction(props);

      let result;
      try {
        result = vdom.render();
      } finally {
        this.effects.forEach((e) => window.requestIdleCallback(e));
        currentComponent = oldCurrentComponent;
      }
      return result;
    },
    useSlot() {
      const slotIndex = currentSlot++;

      if (slotIndex >= this.slots.length) {
        this.slots[slotIndex] = undefined;
      }

      return {
        slot: this.slots[slotIndex],
        setSlot: (v) => {
          this.slots[slotIndex] = v;
        },
      };
    },
  };
};

export const useRef = (v) => {
  const { slot, setSlot } = currentComponent.useSlot();
  if (slot === undefined) {
    const ref = { current: v };
    setSlot(ref);
    return ref;
  }
  return slot;
};

export const useEffect = (hook, deps) => {
  currentComponent.effects.push(hook);
};
