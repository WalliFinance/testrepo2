import Image from "next/image";
import styles from "./page.module.scss";
import MenuList from "./components/MenuList";
import { testList } from "./utils/List";


const list = [
  {
      subtitle:'Waffle',
      title: 'Waffle with Berries',
      price: '$6.50',
      img: '/public/image-macaron-desktop.jpg',
      id:1
  },
  {
      subtitle:'Crème Brúlée',
      title: 'Vanilla Bean Crème Brúlée',
      price: '$7.00',
      img: '/public/image-creme-brulee-desktop.jpg',
      id:2
  },
  {
      subtitle:'Macaron',
      title: 'Macaron Mix of Five',
      price: '$8.00',
      img:'/public/image-macaron-desktop.jpg',
      id:3
  }
  ]
export default function Home() {
  return (
    <main className={styles.main} >
     <h1>Desserts</h1>
     <MenuList items={testList}/>
    </main>
  );
}
