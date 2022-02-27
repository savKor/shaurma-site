import { createLoginForm } from './login-form/form'

export function createLoginContainer() {
  const formHTML = createLoginForm()
  const mainHTML = /* html */ `
        
    <section class="vh-100 bg-image" style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" style="border-radius: 15px;">
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">Login account</h2>
                                ${formHTML}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
  return mainHTML
}