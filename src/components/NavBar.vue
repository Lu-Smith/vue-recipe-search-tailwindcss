<template>
    <header class="bg-textColor text-bgColor 
    shadow-md h-16 flex justify-between items-stretch">
    <router-link 
    :to="{name: 'home'}"
    class="px-2 h-full hover:text-linksColor font-bold text-xl ml-2
        duration-600 inline-flex items-center transition-colors">
        Home
    </router-link>
    <div class="flex items-center font-medium text-sm md:text-lg">
        Search by:
        <router-link 
        :to="{name: 'byMeal'}" 
        class="px-2 h-full hover:bg-linksColor hover:text-textColor
        duration-600 inline-flex items-center transition-colors ">
        Meals
        </router-link>
        <router-link 
        :to="{name: 'byLetter'}"
        class="px-2 h-full hover:bg-linksColor hover:text-textColor
        duration-600 inline-flex items-center transition-colors">
        Letter
        </router-link>
        <router-link 
        :to="{name: 'byIngredients'}"
        class="px-2 h-full hover:bg-linksColor hover:text-textColor
        duration-600 inline-flex items-center transition-colors pr-2 md:pr-4">
        Ingredients
        </router-link>
    </div>
    </header>
</template>