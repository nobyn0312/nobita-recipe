import { useEffect, useState , useRef} from 'react';
import './App.css';
import { Recipe } from './Recipe';

function App() {

  const APP_ID='6bedacd4'
  const  APP_KEY ='149433969ce6c47fe00f80ff64e334a0	'

const inputRef = useRef(null);
useEffect(()=>{
  inputRef.current.focus()
},[])

  const [search,setSearch] =useState("");
  const [query,setQuery] = useState("banana")
  const [recipes,setRecipes] =useState([])

  const getRecipes =async()=>{
    const response = await fetch(`https://api.edamam.com/search?q="${query}"&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data =await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const getSearch =e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }


  useEffect(()=>{
    getRecipes();
  },[query])


  return (
    <div className="App">
    <form onSubmit={getSearch}>
    <input ref={inputRef} type="text"  value={search} onChange={updateSearch}/>
    <button type='submit'>検索</button>
    </form>
    <div>
      {recipes.map(recipe =>(
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories ={recipe.recipe.calories}
          image ={recipe.recipe.image}
          ingredients ={recipe.recipe.ingredients}
        />
      ) )}
    </div>
    </div>
  );
}

export default App;
