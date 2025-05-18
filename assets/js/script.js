const venta = document.querySelector("#venta");
const rowVenta = document.querySelector(".row");




for (let venta of propiedades_venta) {

    rowVenta.innerHTML += `
    <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Apartamento de lujo en zona exclusiva
                </h5>
                <p class="card-text">
                  Este apartamento de lujo está ubicado en una exclusiva zona
                  residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                  Prestige Suburb, CA 45678
                </p>
                <p>
                  <i class="fas fa-bed"></i> 4 Habitaciones |
                  <i class="fas fa-bath"></i> 4 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 5.000</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
            </div>
          </div>
    `;

}