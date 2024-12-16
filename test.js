const categories = [
    {
      name: "category1",
      subcategories: [
        {
          name: "category2",
          subcategories: [],
        },
        {
          name: "category3",
          subcategories: [
            {
              name: "category4",
              subcategories: [],
            },
          ],
        },
      ],
    },
    {
      name: "category5",
      subcategories: [],
    },
  ];
  
const buildPaths = (categories) => {
    const paths = {};
  
    const buildCategoryPaths = (categories, currentPath) => {
      categories.forEach((category) => {
        const path = `${currentPath}/${category.name}`;
        paths[category.name] = path;
  
        if (category.subcategories.length) {
          buildCategoryPaths(category.subcategories, path);
        }
      });
    };
  
    buildCategoryPaths(categories, "");
  
    return paths;
};
  
  const getCategoryPath = (categories, categoryName) => {
    const categoryPaths = buildPaths(categories);
  
    return categoryPaths[categoryName] || null;
  };
  
  console.log(getCategoryPath(categories, "category1"));
  