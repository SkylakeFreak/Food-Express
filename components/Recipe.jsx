"use client";
import React, { useState, useEffect } from 'react';
import {Aclonica, Amita, Averia_Sans_Libre, Averia_Serif_Libre, Jockey_One, Luckiest_Guy, Pacifico, Prompt, Rock_Salt, Rubik_Broken_Fax, Rubik_Maps, Sacramento, Ubuntu, Unica_One} from "@next/font/google"; 
import Image from 'next/image';
import bgimage from "@/rec/bg.jpg"
const roboto=Ubuntu({
  subsets:["latin"],
  weight:'400'
})
const roboto4=Jockey_One({
  subsets:["latin"],
  weight:'400'
})
const roboto3=Aclonica({
  subsets:["latin"],
  weight:'400'
})
const roboto1=Pacifico({
  subsets:["latin"],
  weight:'400'
})
const anta=Averia_Sans_Libre({
  subsets:["latin"],
  weight:'400'
})
const RecipeComponent = () => {
  const [recipesearch, setRecipesearch] = useState("");
  const [recipeId, setRecipeId] = useState('');
  const [recipeData, setRecipeData] = useState(null);
  const [receipeiddata, setreceipeiddata] = useState(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  

  const handleRecipeIdChange = (e) => {
    setRecipeId(e.target.value);
  };

  const handlesearch = (e) => {
    setRecipesearch(e.target.value);
  };

  const fetchRecipeData = async () => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${selectedRecipeId}/information?apiKey=757784a98a374d4bbf1da35af525caaf&includeNutrition=true.`);
      const data = await response.json();
      setRecipeData(data);
    } catch (error) {
      console.error('Error fetching recipe data:', error);
    }
  };

  const test = async () => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${recipesearch}&number=2000&apiKey=757784a98a374d4bbf1da35af525caaf`);
      const data1 = await response.json();
      setreceipeiddata(data1);
      console.log(receipeiddata?.results[0].title, receipeiddata?.results[0].id);
    } catch (error) {
      console.error('Error fetching recipe data:', error);
    }
  };

  const renderIngredient = (ingredient) => {
    const { amount, unit, name, originalName } = ingredient;
    return (
      <div className="mb-2">
        <span className="font-bold">{amount} {unit}</span>
        <span> {name}</span>
        <span> ({originalName})</span>
      </div>
    );
  };

  const renderRecipeInfo = (label, value) => (
    <p>
      <span className="font-bold">{label}:</span> {value}
    </p>
  );

  const handleRecipeChange = (event) => {
    const selectedId = event.target.value;
    setSelectedRecipeId(selectedId);
  };

  return (
    <div className='h-auto overflow-x-hidden'> {/* Added overflow-x-hidden */}
    <div className='h-20 bg-spblack'></div>
    <div style={anta.style} className='bg-darkblack h-auto'>
        <div className='bg-cream h-40 flex items-center justify-between'>
            <h1 style={anta.style} className='p-10 text-gray-800 text-3xl font-semibold'>CRAVE YOUR SEARCHES HERE!</h1>
            <div className='block md:flex items-center space-x-5 p-5 pr-20'>
                <input
                    value={recipesearch}
                    onChange={handlesearch}
                    className='ml-5 mb-3 md:mb-0 md:ml-0 h-10 text-center text-sm w-20 p-2 md:w-60 md:text-lg rounded-sm outline-none focus:ring focus:border-gray-500 bg-spblack text-white hover:bg-gray-700'
                    type="text"
                    placeholder='Enter Recipe'
                />
                <button
                    onClick={test}
                    className='h-10 w-20 md:w-20 rounded-sm font bg-gray-800 hover:bg-gray-700 text-white'
                >
                    SHOW
                </button>
            </div>
        </div>

        <div className='h-30 bg-gradient-to-b from-white to-gray-100 flex items-center justify-between ml-10 mr-10 rounded-md mt-10'>
            <div className="font-sans p-5 ml-10">
                <label htmlFor="recipeDropdown" className="font-bold"></label>
                <select
                    id="recipeDropdown"
                    onChange={handleRecipeChange}
                    value={selectedRecipeId || ''}
                    className="p-2 w-20 md:w-80 rounded bg-gray-300 text-gray-800"
                >
                    <option value="">Select Recipe...</option>
                    {receipeiddata?.results.map(recipe => (
                        <option key={recipe.id} value={recipe.id}>
                            {recipe.title}
                        </option>
                    ))}
                </select>

                {selectedRecipeId !== null && (
                    <p className="mt-2 mb-2 text-gray-600 animate-pulse text-gray-800">
                        You selected recipe with ID: {selectedRecipeId}
                    </p>
                )}
                <button
                    className='bg-gray-800 text-white p-3 rounded-sm font-bold hover:animate-pulse ml-2'
                    onClick={fetchRecipeData}
                >
                    SEARCH
                </button>
            </div>
        </div>

        <div className='p-10'>
            <div className='bg-white rounded-xl'>
                <div className='bg-gray-200 flex justify-center rounded-xl'>
                    <img className="rounded-lg" src={recipeData?.image} alt={recipeData?.title} />
                </div>

                <div className="p-6">
                    <div className="block md:flex justify-between">
                        {renderRecipeInfo('Ready in', `${recipeData?.readyInMinutes} minutes`)}
                        {renderRecipeInfo('Servings', recipeData?.servings)}
                        {renderRecipeInfo('Health Score', recipeData?.healthScore)}
                        {renderRecipeInfo('Likes', recipeData?.aggregateLikes)}
                    </div>
                </div>

                <h2 className="text-xl font-bold mt-4 p-4 bg-gray-200 text-gray-800">Ingredients:</h2>
                <ul className="ml-10 overflow-x-auto max-w-full">
                    {recipeData?.extendedIngredients.map((ingredient) => (
                        <li className='p-2 border-b border-gray-300' key={ingredient.id}>
                            {renderIngredient(ingredient)}
                        </li>
                    ))}
                </ul>

                <h2 className="text-xl font-bold mt-4 p-4 bg-gray-200 text-gray-800">Instructions:</h2>
                <p className="p-6 text-gray-800">{recipeData?.instructions}</p>
            </div>
        </div>
    </div>
    <div className='bg-darkblack h-80'></div>
</div>


  );
};

export default RecipeComponent;
