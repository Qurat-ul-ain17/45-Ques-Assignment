"use strict";
function make_sandwich(...items) {
    console.log(`Making a sandwich with: ${items.join(',')}.`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomatoes");
make_sandwich("avocado", "jalapeno", "musturd", "mayo");
