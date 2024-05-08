import ButtonComponent from '../buttonComponent/buttonComponent';
import styles from './header.module.css';

export default function MyFirstComponent() {

    const buttonOnClick = () => {
        console.log("button on Click")
    };

    const buttonTwoOnClick = () => {
        console.log("button 2 on click")
    }

    return (
        <div className={styles.container}>
            
            <h1 className={styles.header}>Reusable Button Component</h1>
            <ButtonComponent label='Button1' onClickFunction={buttonOnClick} className={styles.button1Styles}/>
            <ButtonComponent  onClickFunction={buttonTwoOnClick} className={styles.button2Styles}/>
        </div>
    )
}