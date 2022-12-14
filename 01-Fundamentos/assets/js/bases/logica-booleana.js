const regresaTrue = () => {
  console.log("regresa true");
  return true;
};
const regresaFalse = () => {
  console.log("regresa false");
  return false;
};

console.warn("Negación");
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());

console.warn('And');
console.log(true && true);
console.log(true && false);
console.log(false && false);


console.log('==========');
console.log(regresaFalse() && regresaTrue());//false solo ejecuta hasta que se da cuenta que va a ser false
console.log(regresaTrue() && regresaFalse());//false pero si muestra ambas instrucciones

console.warn('OR');
console.log(true || false);//true
console.log(false || false);//true
console.log(regresaTrue() || regresaFalse());


console.warn('Asignaciones');

const soyUndefiend = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo';
// const a1 = false && 'Hola mundo';
const a2 = false && 'Hola mundo' && soyFalse;

const a3 = soyFalse || 'Ya no soy falso';
const a4 = soyFalse || soyUndefiend || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalse || soyUndefiend || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});
