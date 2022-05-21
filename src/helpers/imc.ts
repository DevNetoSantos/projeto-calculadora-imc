export type level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels = [
    { title: 'Magreza', color: '#96A3AbB', icon: 'dwon', imc: [0, 18.5]},
    { tile: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9]},
    { tiile: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30]},
    { tile: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99]}
];

export const calImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            return levels[1];
        }
    }


    return null;
}