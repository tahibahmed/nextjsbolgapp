import Image from "next/image";
import Styles from "./home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textcontainer}>
        <h1 className={Styles.title}>Creative thoughts Agency.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse impedit
          nesciunt nulla nisi, laudantium natus tempore illum iusto in labore?
        </p>
        <div className={Styles.buttons}>
          <button className={Styles.button}>Learn More</button>
         <Link className={Styles.contactbutton} href={'/contact'}> Contact </Link>
        </div>
      </div>
      <div className={Styles.imgcontainer}>
        <Image src={'/r1.gif'} alt="" fill className={Styles.img} />
      </div>
    </div>
  );
};

export default Home;
