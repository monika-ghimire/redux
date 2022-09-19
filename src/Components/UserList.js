import React from 'react'
import styles from '../styles.module.css'

export default function UserList(props) {
  
  return (
   <> 
   <div class={styles.UserCardHolder}>
  
  Name:{props.name}
  <br/>
  gmail:{props.email}

   </div>
   </>
  )
}
