//import styles from "./Loading.module.scss";

export default function Loading() {
  return (
    <>
        <section id="loading" className="">
          <div className="container d-flex justify-content-center align-items-center">
            <span className="loading_icon text-white"><i className="fa-solid fa-spinner fs-1 fa-spin"></i></span>
          </div>
        </section>
    </>
  )
}
