import{n as e,t}from"./formato.BczpRxzS.js";function n(n){return`<div class="totales">
    <div><span>Subtotal</span><span>${e(n.subtotal)}</span></div>
    ${n.descuento>0?`<div class="totales__descuento"><span>Cupón ${t(n.cupon.codigo)}</span><span>−${e(n.descuento)}</span></div>`:``}
    <div><span>Envío</span><span>${n.envio===0?`Gratis`:e(n.envio)}</span></div>
    <div class="totales__total"><span>Total</span><span>${e(n.total)}</span></div>
  </div>`}export{n as t};