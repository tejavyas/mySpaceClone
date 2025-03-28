// basic navigation menu

import Link from 'next/link';
import Image from 'next/image';
import styles from './NavMenu.module.css'

// default function that returns some jsx
export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            {/* // logo is a link to the root */}
            <Link href={'/'}>
                <Image src="/next.svg" width={216} height={30} alt="NextSpace Logo"></Image>
            </Link>
            {/* // unordered list */}
            <ul className={styles.links}>
                {/* nav location 1 */}
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                {/* nav location 2 */}
                <li>
                    <Link href={'/blog'}>Blog</Link>
                </li>
                {/* nav location 3 */}
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
            </ul>
        </nav>
    );
}