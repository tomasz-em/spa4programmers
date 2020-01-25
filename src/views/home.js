// określony widok dla danego komponentu -- co ma zawierać HTML jako zwracane treści 
import $ from 'jquery';

export const home = () => {
    const fragment = $(new DocumentFragment);   // (+) WYDAJNOŚĆ:
//...brak ciągłych operacji na DOM, przy kolejnej operacji na każdym z nowo dostawianych z osobna elementów lub ich modyfikowaniu (np. atrybuty, itp.)

    fragment
        .append('<h2>Home</h2>')
        .append('<p>Nieco losowego tekstu, by coś specyficznego dla HOME wyświetlić.</p>');

    return fragment;
};