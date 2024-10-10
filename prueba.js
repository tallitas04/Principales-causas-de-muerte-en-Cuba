// const primo = function(n){
//     let m = 0;
//     if (n == 1){
//         return true;
//     }
//     for (let i = 2; i<n;i++){
//         if (n % i != 0){
//             m = n;
//         }
//         else{
//             return false;
//         }
//     }
//     return m;

// }
// const praimo = function(n,k){
//     if (n == 1){
//         return true;
    
//     }
//     if ( (n/k != 0)  && (k>1)){
//         praimo(n,k-1);
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const primoPerfecto = function(k){
//     let a = k.toString();
//     let b = 0;
//     let i =0
//     while(i<a.length-1){
//         b += a[i];
//         i++;
//     }
//     if(praimo(a,a-1) != false){
//         if (praimo(b,b-1) != false){
//             return true; 
//         }
//         else{
//             return false;
//         }
//     }

// }

// console.log(primoPerfecto(17));
// console.log(praimo(3,2));

class IQuadTree{
    constructor(element) {
        this.element = element;
        this.hijos = []
    }


    SearchPixel(current,element){
        if (current.element == element){
            return current
        }
        for (hijos in current.hijos){
            let NodoBuscado = this.SearchPixel(hijos,element);
            if (NodoBuscado != null){
                return NodoBuscado
            } 
        }
        return null
    }

    DrawPixel(root,elementoPadre,element,isBlack = new Boolean(false)) {
        let gris = this.SearchPixel(root,elementoPadre);
        gris.hijos.push(IQuadTree(element))
        }

    

    CountPixels() {
        

    }

    Color() {
        this.element = 'c'
    }

    TopLeft() {
        this.element = 'c'
    }

    TopRight() {
        this.element = 'd'
    }

    BottomLeft() {
        this.element = 'e'
    }

    BottomRight() {
        this.elemnt = 'a'

    }

}

let gris0 = '0'
let black1 = '1'
let white1 = '2'
let black2 = '3'
let white2 = '4'
 

// const arbol = new IQuadTree(gris0);
// arbol.DrawPixel(gris0,gris0,black1,true);
// arbol.DrawPixel(gris0,gris0,white1,false)
// arbol.DrawPixel(gris0,gris0,black2,true)
// arbol.DrawPixel(gris0,gris0,white2,false)


const rutas_string = "P1: ParadaA, ParadaB, ParadaC, ParadaD. P2: ParadaC, ParadaE, ParadaF, ParadaG. P3: ParadaD, ParadaH, ParadaI, ParadaJ. P4: ParadaB, ParadaK, ParadaL, ParadaM. P5: ParadaF, ParadaN, ParadaO, ParadaP";

const paraditas = rutas_string.split('.');


class organizadorRutas{
    constructor(rutas_string = "P1: ParadaA, ParadaB, ParadaC, ParadaD. P2: ParadaC, ParadaE, ParadaF, ParadaG. P3: ParadaD, ParadaH, ParadaI, ParadaJ. P4: ParadaB, ParadaK, ParadaL, ParadaM. P5: ParadaF, ParadaN, ParadaO, ParadaP"
){
        this.rutas_string = rutas_string
        this.paraditas = paraditas
    }

    guaguas(){
       let guaguas_string = this.paraditas.join(':');
       let guaguas = guaguas_string.split(':');
       for (let i = 0; i < guaguas.length;i++){

            if (i % 2 == 0){
                let pe = guaguas[i];
                console.log(pe);
            }
        
       }
    }

    paradas(){
        let paradas_string = this.paraditas.toString();
        let paradas = paradas_string.split(' ');
        
        for (let i =0; i<paradas.length;i++){
            if (i%5 != 0){
                console.log(paradas[i])
            }
        }

    }



}

const organizador = new organizadorRutas("P1: ParadaA, ParadaB, ParadaC, ParadaD. P2: ParadaC, ParadaE, ParadaF, ParadaG. P3: ParadaD, ParadaH, ParadaI, ParadaJ. P4: ParadaB, ParadaK, ParadaL, ParadaM. P5: ParadaF, ParadaN, ParadaO, ParadaP");

organizador.guaguas();
organizador.paradas()