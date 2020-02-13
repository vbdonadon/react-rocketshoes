import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Main() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-wish-masculino/12/COL-7158-012/COL-7158-012_zoom2.jpg?ims=326x"
          alt="Tênis Adidas"
        />

        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-wish-masculino/12/COL-7158-012/COL-7158-012_zoom2.jpg?ims=326x"
          alt="Tênis Adidas"
        />

        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-wish-masculino/12/COL-7158-012/COL-7158-012_zoom2.jpg?ims=326x"
          alt="Tênis Adidas"
        />

        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-wish-masculino/12/COL-7158-012/COL-7158-012_zoom2.jpg?ims=326x"
          alt="Tênis Adidas"
        />

        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-wish-masculino/12/COL-7158-012/COL-7158-012_zoom2.jpg?ims=326x"
          alt="Tênis Adidas"
        />

        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
