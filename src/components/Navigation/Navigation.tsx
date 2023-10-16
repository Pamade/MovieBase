import {useState} from "react"
import styles from "./navigation.module.scss"
import {RxHamburgerMenu} from "react-icons/rx"

const ListItems = ['1','2','3','4'] as const

function Navigation() {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const displayListItems = ListItems.map((item) => <li className={styles.list_item}>{item}</li>)

  return (
    <div className={styles.navigation}>
        <div className={styles.content}>
            <div>logo</div>
            <RxHamburgerMenu className={styles.bar_icon} onClick={() => setIsNavOpen(!isNavOpen)} />
            {isNavOpen &&         
            <ul className={styles.list_mobile}>
                {displayListItems}
            </ul>
            }
            <ul className={styles.list_desktop}>
              {displayListItems}
            </ul>
        </div>

    </div>
  )
}

export default Navigation