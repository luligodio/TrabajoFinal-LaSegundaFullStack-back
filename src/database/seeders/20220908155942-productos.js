'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkInsert('productos', [{
                    name: 'All Star Burger',
                    ingredientes: '240 gr en Doble Medallón de Carne Vacuna Premium, Panceta Ahumada, Queso Cheddar,Cebolla Caramelizada, Barbacoa Casera y Honey Mustard. Con Fritas',
                    precio: 1,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Impanato Burger',
                    ingredientes: '240 gr en Doble Medallón de Carne Vacuna Premium, Mozzarella Rebozada, Cebolla Salteada, Lechuga y Salsa Barbacoa Casera. Con Fritas!',
                    precio: 1500,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Mex Hot Burger',
                    ingredientes: '240 gr en Doble Medallón de Carne Vacuna Premium, Guacamole Tradicional, Queso Cheddar,Bacon, Cebolla Morada y Mayonesa Picante Casera. Con Fritas',
                    precio: 1500,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pickle Rick Burger',
                    ingredientes: '240 gr en Doble Medallón de Carne Vacuna Premium, Panceta Ahumada, Queso Fontina, Cebolla Caramelizada, Pepinillos Alemanes,Mayonesa Picante y Guacamole Clásico. Con Fritas!',
                    precio: 1500,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Crack Burger',
                    ingredientes: '240 gr en Doble Medallón de Carne Vacuna Premium,Jamón Cocido,Queso Dambo,,Tomate y Huevo Frito.Con Fritas!',
                    precio: 1500,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Burger De la Huerta',
                    ingredientes: '240 gr en Doble Medallón de Carne Vacuna Premium, Panceta Ahumada, Queso Fontina, Cebolla Caramelizada, Pepinillos Alemanes,Mayonesa Picante y Guacamole Clásico. Con Fritas!',
                    precio: 1500,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Cheese Burger',
                    ingredientes: '120 gr en Medallón de Carne Vacuna Premium, con Queso Cheddar, Aderezo deKetchup, Mostaza y Cebolla.Con Fritas!',
                    precio: 1050,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Doble Cheese Burger',
                    ingredientes: '240 gr en 2 Medallones de Carne Vacuna Premium, con Queso Cheddar, Aderezo deKetchup, Mostaza y Cebolla.Con Fritas!',
                    precio: 1350,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Bacon & Cheese Burger',
                    ingredientes: '120 gr en Medallón de Carne Vacuna Premium, Bacon Crispy, Queso Cheddar,Aderezo de Ketchup, Mostaza y Cebolla.Con Fritas!',
                    precio: 1150,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Doble Bacon & Cheese',
                    ingredientes: '240 gr en Doble Medallón de Carne Vacuna Premium, Bacon Crispy, Queso Cheddar,Aderezo de Ketchup, Mostaza y Cebolla.Con Fritas!',
                    precio: 1150,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Burger Vegetariana Lentejas',
                    ingredientes: 'Medallón de 200 gr de Lentejas y EspinacaCaseras con Salsa Teriyaki, Queso Dambo, Rúcula yChips de Papas.En Pan Masa Madre Negro. Con Fritas!',
                    precio: 1450,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Burger Vegetariana Berenjenas',
                    ingredientes: 'Medallón de 200 gr de Arroz Yamaní y BerenjenasTomates secos, Mozzarella, Albahaca , con Salsa Teriyaki y Chips de Papas. En Pan Masa Madre Negro. Con Fritas!',
                    precio: 1350,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Chicken Crispy Burger',
                    ingredientes: 'Pollo Crispy , Queso Cheddar, Lechuga, Tomate y Salsa Tártara.Con Fritas!',
                    precio: 1350,
                    stock: 150,
                    id_categoria: 1,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Nuggets & Barbecue',
                    ingredientes: 'Pechuguitas Adobadas con Mix de Especias y Empanizadas.Con Cazuela de Barbacoa Casera y Fritas',
                    precio: 1100,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Bastones de Mozzarella',
                    ingredientes: '5 Bastones de Mozzarella Empanizados y Cazuela de Salsa Pomodoro',
                    precio: 1100,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Buffalo Chicken Wings',
                    ingredientes: 'Alitas Fritas Glaseadas con Siracha Picante, Manteca y Miel. Con Fritas y Dip de Sour Cream y Blue Cheese',
                    precio: 1250,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'BBQ Chicken Wings',
                    ingredientes: 'Alitas de Pollo Fritas Gratinadas con Salsa Barbacoa de la Casa. Con Fritas y Dip de Queso Crema con Ciboullette',
                    precio: 1250,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Nachos Ándale Guero',
                    ingredientes: 'Nachos Caseros Fritos con Salsa deCarne Picada , Panceta y Porotos Picantes, Salsa Cheddar y Guacamole Casero',
                    precio: 1200,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Nachos luna',
                    ingredientes: 'Nachos Caseros con Dips de Queso Crema con Ciboullette, Queso Cheddar y Guacamole Casero',
                    precio: 1050,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Nachos con Cheddar',
                    ingredientes: 'Nachos Caseros con Dip de Queso Cheddar',
                    precio: 950,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Papas Fritas',
                    ingredientes: 'Papas Fritas',
                    precio: 700,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Papas Provenzal',
                    ingredientes: 'Papas Fritas con Aderezo de Perejil, Ajo yAceite de Oliva',
                    precio: 750,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Papas a Caballo',
                    ingredientes: 'Papas Fritas con 2 Huevos Fritos',
                    precio: 900,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Papas Cheddar',
                    ingredientes: 'Papas Fritas Bañadas en Queso Cheddar',
                    precio: 950,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Papas Bacon',
                    ingredientes: 'Papas Fritas con Panceta Ahumada en Cubos, Queso Crema y Cebolla de Verdeo',
                    precio: 1100,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Papas Bacon+Cheddar',
                    ingredientes: 'Papas Fritas con Panceta Ahumada en Cubos, Queso Crema y Cebolla de Verdeo y Bañadas con Queso Cheddar',
                    precio: 1200,
                    stock: 150,
                    id_categoria: 2,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pizza Mozzarella',
                    ingredientes: 'Mozzarella',
                    precio: 1500,
                    stock: 150,
                    id_categoria: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pizza Jamón',
                    ingredientes: 'Mozzarella y Jamón',
                    precio: 1700,
                    stock: 150,
                    id_categoria: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pizza Jamón y Tomate',
                    ingredientes: 'Jamón Cocido, Rodajas de Tomate,Mozzarella',
                    precio: 1800,
                    stock: 150,
                    id_categoria: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pizza Jamón y Morrón',
                    ingredientes: 'Jamón Cocido, Morrones asados,Mozzarella',
                    precio: 1900,
                    stock: 150,
                    id_categoria: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pizza Napolitana',
                    ingredientes: 'Tomate, Ajo, Perejil y Oliva',
                    precio: 1700,
                    stock: 150,
                    id_categoria: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pizza Pancetta e Scalogno',
                    ingredientes: 'Panceta, Cebolla de Verdeo, Mozzarella',
                    precio: 1800,
                    stock: 150,
                    id_categoria: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pizza Pomodori e Rucola',
                    ingredientes: 'Tomates Secos, Rúcula, Parmesano,Mozzarella',
                    precio: 1800,
                    stock: 150,
                    id_categoria: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pizza Tomate y Albahaca',
                    ingredientes: 'Rodajas de Tomate, Hojitas de Albahaca y Mozzarella',
                    precio: 1700,
                    stock: 150,
                    id_categoria: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pizza Fugazzeta',
                    ingredientes: 'Mozzarella, Cebolla, Cebolla Morada y Aceite de Oliva',
                    precio: 1600,
                    stock: 150,
                    id_categoria: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Pizza Salvaje',
                    ingredientes: 'Jamón Crudo, Rúcula,Parmesano, y Mozzarella',
                    precio: 2000,
                    stock: 150,
                    id_categoria: 3,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'BROWNIE & ICE CREAM',
                    ingredientes: 'Brownie Casero acompañado de una Bocha de Helado de Americana,Frutilla en Almíbar y Salsa de Dulce de Leche',
                    precio: 750,
                    stock: 150,
                    id_categoria: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'CHOCO TORTA',
                    ingredientes: 'Chocolinas, Dulce de leche, Queso crema y Chocolate',
                    precio: 650,
                    stock: 150,
                    id_categoria: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'TIRAMISÚ',
                    ingredientes: 'Fiesta de Mascarpone al Estilo Italiano',
                    precio: 700,
                    stock: 150,
                    id_categoria: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'MILK SHAKE VAINILLA',
                    ingredientes: 'Helado Vainilla',
                    precio: 700,
                    stock: 150,
                    id_categoria: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'MILK SHAKE CHOCOLATE',
                    ingredientes: 'Helado chocolate',
                    precio: 700,
                    stock: 150,
                    id_categoria: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'MILK SHAKE CREMA AMERICANA',
                    ingredientes: 'Helado Crema americana',
                    precio: 700,
                    stock: 150,
                    id_categoria: 4,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LATA de Pepsi',
                    ingredientes: 'Gaseosa',
                    precio: 250,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LATA de Pepsi light',
                    ingredientes: 'Gaseosa',
                    precio: 250,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LATA de Seven Up',
                    ingredientes: 'Gaseosa',
                    precio: 250,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LATA de Seven Up Light',
                    ingredientes: 'Gaseosa',
                    precio: 250,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LATA de Tonica',
                    ingredientes: 'Gaseosa',
                    precio: 250,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Agua',
                    ingredientes: 'Agua',
                    precio: 250,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Agua con Gas',
                    ingredientes: 'Agua con Gas',
                    precio: 250,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'jugo Exprimido',
                    ingredientes: 'Naranja',
                    precio: 420,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LIMONADA',
                    ingredientes: 'Limón Exprimido, Menta Fresca, Rodajas de Jengibre y Syrup Ginger',
                    precio: 420,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LIMONADA TROPICAL TEA',
                    ingredientes: 'Lima Exprimida, Té Tropical Casero, Tropical Syrup',
                    precio: 420,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'POMELADA',
                    ingredientes: 'Pomelo exprimido, Rodajas de Pepino, Syrup de 7 Hierbas',
                    precio: 450,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LICUADOS de Frutilla',
                    ingredientes: 'Frutilla',
                    precio: 460,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LICUADOS de Durazno',
                    ingredientes: 'Durazno',
                    precio: 460,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LICUADOS de Anana',
                    ingredientes: 'Anana',
                    precio: 460,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LICUADOS de Frambruesa',
                    ingredientes: 'Frambruesa',
                    precio: 460,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LICUADOS de Arandanos',
                    ingredientes: 'Arandanos',
                    precio: 460,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LICUADOS de Mango',
                    ingredientes: 'Mango',
                    precio: 460,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LICUADOS de Banana',
                    ingredientes: 'Banana',
                    precio: 460,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'LICUADOS de Maracuya',
                    ingredientes: 'Maracuya',
                    precio: 460,
                    stock: 150,
                    id_categoria: 5,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Alma Mora',
                    ingredientes: 'Malbec',
                    precio: 1700,
                    stock: 150,
                    id_categoria: 6,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Alaris',
                    ingredientes: 'Malbec',
                    precio: 1700,
                    stock: 150,
                    id_categoria: 6,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Benjamin',
                    ingredientes: 'Malbec',
                    precio: 1350,
                    stock: 150,
                    id_categoria: 6,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Dada',
                    ingredientes: 'Malbec',
                    precio: 1350,
                    stock: 150,
                    id_categoria: 6,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Callia',
                    ingredientes: 'Malbec',
                    precio: 1350,
                    stock: 150,
                    id_categoria: 6,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Latitud 33',
                    ingredientes: 'Malbec',
                    precio: 1850,
                    stock: 150,
                    id_categoria: 6,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: '',
                    ingredientes: '',
                    precio: 1,
                    stock: 150,
                    id_categoria: 7,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'jameson',
                    ingredientes: 'Irish Whiskey',
                    precio: 1000,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'J&B',
                    ingredientes: 'Scotch',
                    precio: 900,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Cutty Sark',
                    ingredientes: 'Scotch',
                    precio: 900,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Chivas Regal',
                    ingredientes: 'Scotch',
                    precio: 1090,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Ballantines',
                    ingredientes: 'Scotch',
                    precio: 950,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Monkey Shoulder',
                    ingredientes: 'Scotch',
                    precio: 2000,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Jack Daniels',
                    ingredientes: 'Tennessee Whisky',
                    precio: 2000,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Jack Daniels Honey',
                    ingredientes: 'Tennessee Whisky',
                    precio: 2000,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Fireball',
                    ingredientes: 'Tennessee Whisky',
                    precio: 850,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Jim Beam',
                    ingredientes: 'Bourbon',
                    precio: 1300,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Jim Beam Black',
                    ingredientes: 'Bourbon',
                    precio: 2000,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Wild Turkey 101',
                    ingredientes: 'Bourbon',
                    precio: 1900,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Makers Mark',
                    ingredientes: 'Bourbon',
                    precio: 2200,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'johnnie Walker Red Label',
                    ingredientes: 'Scotch"',
                    precio: 1000,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'johnnie Walker Black Label',
                    ingredientes: 'Scotch',
                    precio: 1500,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'johnnie Walker Double Black',
                    ingredientes: 'Scotch',
                    precio: 1800,
                    stock: 150,
                    id_categoria: 8,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Golden',
                    ingredientes: 'Pinta Tirada',
                    precio: 460,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Scottish',
                    ingredientes: 'Pinta Tirada',
                    precio: 480,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'honey',
                    ingredientes: 'Pinta Tirada',
                    precio: 460,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Stout',
                    ingredientes: 'Pinta Tirada',
                    precio: 460,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Ipa',
                    ingredientes: 'Pinta Tirada',
                    precio: 500,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Apa',
                    ingredientes: 'Pinta Tirada',
                    precio: 500,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Red Ipa',
                    ingredientes: 'Pinta Tirada',
                    precio: 510,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Session Ipa',
                    ingredientes: 'Pinta Tirada',
                    precio: 510,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Corona',
                    ingredientes: 'Porron',
                    precio: 640,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Andes Rubia',
                    ingredientes: 'lata 473cc',
                    precio: 430,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Andes roja',
                    ingredientes: 'lata 473cc',
                    precio: 430,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Andes Negra',
                    ingredientes: 'lata 473cc',
                    precio: 430,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Andes Ipa',
                    ingredientes: 'lata 473cc',
                    precio: 430,
                    stock: 150,
                    id_categoria: 9,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }



            ], ),
        ]);
    },


    async down(queryInterface, Sequelize) {
        await Promise.all([
            queryInterface.bulkDelete('productos', null, {}),
        ]);
    }
};