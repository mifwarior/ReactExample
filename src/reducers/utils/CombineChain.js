export default function CombineChain() {
  this.map = {};
  this.reduce = (state, action) => {
    const func = this.map[action.type];
    if (func) {
      return func(state, action);
    }
    else {
      return state;
    }
  };
  this.add = (type, func) => {
    this.map[type] = func;
    return this;
  };
} 