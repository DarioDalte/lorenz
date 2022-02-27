import Link from "next/link"
import classes from './Button.module.css'


function Button(prop) {
  return (
    <Link href={prop.path} >
        <a className={classes.link}>{prop.action === 'next' ? '>' : '<'}</a>
    </Link>
  )
}

export default Button