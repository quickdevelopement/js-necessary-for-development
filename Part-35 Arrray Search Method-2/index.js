const num = [33, 42, 45, 23, 90, 85, 82, 45, 22];
// find

const gtr = num.find(function great(value, index, array) {
  return value > 50;
});

// console.log(gtr);
const gtrInd = num.findIndex(function great(value, index, array) {
  return value > 50;
});
// console.log(gtrInd)


const last = num.findLast(lastFn);
function lastFn(v,i,arr){
    return v > 44;
};
const lastIdx = num.findLastIndex(lastFnIdx);
function lastFnIdx(v,i,arr){
    return v > 44;
};

console.log(lastIdx);
