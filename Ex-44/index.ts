function make_sandwich(...items : string[]){
    console.log(`Making a sandwich with: ${items.join(',')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomatoes");
make_sandwich("avocado", "jalapeno", "musturd", "mayo");