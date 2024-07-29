import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export default useDarkMode() {
 const [dark, setDark] = useLocalStorage('darkmode', false)
 return [dark, setDark]
}