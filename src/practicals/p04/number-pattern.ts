import { measureMemory } from "node:vm";

// Write your code below
const args = process.argv[2];

if(args) {
    const num = Number(args.trim());

    if (!isNaN(num)&& num > 0) {
        for (let i = 1; i < num+1; i++) {
            let message = "";
            for (let j = num; j > 0; j--){
                if(j <= i){
                    message = message + j;
                } else {
                    message = message + ' ';
                }
            }
    
            console.log(message);
            
        }
    }
}