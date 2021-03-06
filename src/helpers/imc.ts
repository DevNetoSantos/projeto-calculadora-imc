export type level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels = [
    { title: 'Magreza', color: '#96A3AB', icon: 'dwon', imc: [0, 18.59]},
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.99]},
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30]},
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99]}
];

export const calImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
            let levelCopy: level = {...levels[i]};

            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }


    return null;
}