import React,{useState,useEffect} from 'react'

const Navbar = () => {
    const [theme, setTheme] = useState("light-mood");

    const handleChange = () => {
        if (theme === "light-mood") {
            setTheme("dark-mood")
        }else{
            setTheme("light-mood")
        }
    }
    useEffect(() => {
      document.querySelector("body").className = theme;
    }, [theme])
    
  return (
    <div>
      <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Blog">Blog</a></li>
        <li><a href="#Contact">Contact</a></li>
        <div onClick={handleChange}>{theme === "light-mood" ?
         <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i>}
         </div>
      </ul>
    </div>
  )
}

export default Navbar
