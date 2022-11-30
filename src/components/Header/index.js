import styles from "./index.module.css"

function Header(props) {
    return(
        <h3 className={styles.mytext}>{props.bashliq}</h3>
    )
}

export default Header