import{n as e,r as t,t as n}from"./formato.BczpRxzS.js";import{t as r}from"./iconos.PF5tsUD1.js";function i(e){return e.disponible?e.inventario<=5?{texto:`Quedan ${e.inventario}`,tipo:`pocas`}:e.nuevo?{texto:`Nuevo`,tipo:`nuevo`}:e.granFormato?{texto:`Gran formato`,tipo:`formato`}:e.precio>0&&e.precio<300?{texto:`Regalo ideal`,tipo:`regalo`}:null:null}function a(a,o){let s=o+t.producto(a.slug),c=n(a.nombre),l=a.img?`<img src="${o}${a.img.src}" width="${a.img.w}" height="${a.img.h}" alt="${c}" loading="lazy" decoding="async">`:`<span class="tarjeta__sin-imagen">${c}</span>`,u=i(a),d=a.disponible?u?`<span class="tarjeta__insignia tarjeta__insignia--${u.tipo}">${n(u.texto)}</span>`:``:`<span class="tarjeta__insignia tarjeta__insignia--agotado">Agotado</span>`,f=a.disponible?`<button type="button" class="btn btn--negro tarjeta__agregar" data-agregar="${a.id}" aria-label="Agregar ${c} al carrito">${r.mas}<span class="tarjeta__agregar-texto">Agregar</span></button>`:``,p=a.calificacion?`<span class="tarjeta__estrellas" title="${a.numCalificaciones} calificaciones en Google Books">${r.estrella} ${a.calificacion.toFixed(1)}</span>`:``,m=a.editorialNombre?`<span>${n(a.editorialNombre)}</span>`:``,h=m||p?`<div class="tarjeta__meta">${m}${p}</div>`:``,g=a.autor?`<p class="tarjeta__autor">${n(a.autor)}</p>`:``,_=a.frase?`<p class="tarjeta__frase">${n(a.frase)}</p>`:``,v=a.disponible?`<span class="tarjeta__precio">${e(a.precio)}</span>`:``,y=a.disponible?``:`<div class="tarjeta__linea2"><button type="button" class="tarjeta__avisame" data-avisame="${a.id}"><span class="tarjeta__avisame-etiqueta">${r.campana} Avísame cuando llegue</span></button></div>`;return`<article class="tarjeta${a.editorialSlug?` tarjeta--ed-${a.editorialSlug}`:``}${a.disponible?``:` tarjeta--agotada`}" data-id="${a.id}">
  <div class="tarjeta__portada">
    <a class="tarjeta__enlace-portada" href="${s}" tabindex="-1" aria-hidden="true">${l}</a>
    ${d}
    <button type="button" class="tarjeta__fav" data-fav="${a.id}" aria-pressed="false" aria-label="Guardar ${c} en favoritos">${r.corazon}${r.corazonLleno}</button>
    ${f}
  </div>
  <div class="tarjeta__linea1">
    <h3 class="tarjeta__nombre"><a href="${s}">${c}</a></h3>
    ${v}
  </div>
  ${g}
  ${y}
  ${_}
  ${h}
</article>`}export{a as t};