
import Image from "next/image";
import Styles from "./contact.module.css";
export const metadata = {
  title: "Next App || contact page",
  description: "Next.js starter app",
};
const ContactPage = () => {

  return (
 
    <div className={Styles.container}>
     
      <div className={Styles.imgcontainer}>
        <Image src={"/r3.gif"} alt="" fill className={Styles.img} />
      </div>
      <div className={Styles.formcontainer}>
        <form className={Styles.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea cols={4} rows={10} placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    
    </div>
  );
};

export default ContactPage;
