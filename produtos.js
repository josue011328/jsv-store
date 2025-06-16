cat > produtos.js << 'EOF'
const roupasFemininas = [
  { nome:"Vestido Floral Verão", imagem:"https://down-br.img.susercontent.com/file/sg-11134201-7rbl1-lmqp8oyc6usv95", link:"https://shope.ee/9Kg9Rp5zQK" },
  { nome:"Blusa Cropped Canelada", imagem:"https://down-br.img.susercontent.com/file/br-11134207-7r98p-lnizx99t2m3ie6", link:"https://shope.ee/5VbHPnkk3E" }
];
const eletronicos = [
  { nome:"Fone Bluetooth Sem Fio", imagem:"https://down-br.img.susercontent.com/file/sg-11134201-7rbkj-lm9oe3v5i6w6d5", link:"https://shope.ee/AUJ1Xc9YSS" },
  { nome:"Relógio Smartwatch", imagem:"https://down-br.img.susercontent.com/file/sg-11134201-7rbkp-lmjz9o7dt13e19", link:"https://shope.ee/7KzkdKaH7K" }
];
function carregarProdutos(produtos, containerId) {
  const c = document.getElementById(containerId);
  produtos.forEach(p=> { c.innerHTML += \`<div class="produto"><img src="\${p.imagem}" alt="\${p.nome}"/><h3>\${p.nome}</h3><a href="\${p.link}" target="_blank">Ver Produto</a></div>\`; });
}
carregarProdutos(roupasFemininas, "roupas");
carregarProdutos(eletronicos, "eletronicos");
EOF
