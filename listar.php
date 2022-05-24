<?php

set_time_limit(-1);

function geraURL($str){

	#echo "https://dominio.com.br";
      	$base = "https://dominio.com.br";
      	#echo  $dir.'/'.$ff;
      	$camino = $str;
      	#echo "\n";
      	$urlParcial = $base.$camino."\n"; 
      	#echo $urlParcial;
      	#Pegar apenas abaixo de public_html
      	$naoQuero = '/home/dominio/public_html';
      	$url = str_replace($naoQuero, '', $urlParcial);
      	return $url;
}

function getCaminho($str){

	$naoQuero = 'https://dominio.com.br';
	$caminho = str_replace($naoQuero, '', $str);
	
	$tambemNaoQuero = substr($caminho, strripos($caminho, '/'), strlen($caminho)-1);
	$pasta = str_replace($tambemNaoQuero, '' ,$caminho);

	return $pasta;
}

function listFolderFiles($dir){
	
	$ffs = scandir($dir);

    	unset($ffs[array_search('.', $ffs, true)]);
    	unset($ffs[array_search('..', $ffs, true)]);

	#Sair do loop quando não ler mais arquivos
	if (count($ffs) < 1) return;
	
	#Para ser recursivo
	foreach($ffs as $ff){
		if(is_dir($dir.'/'.$ff)) {
        		listFolderFiles($dir.'/'.$ff);
        	#Aqui só tenho caminho dos diretorios caso precise
        	#echo "Dentro".$dir.'/'.$ff."\n";
    		}    	
    	#echo "Fora".$dir.'/'.$ff."\n";
    	$url = geraURL($dir.'/'.$ff);	
    	#echo "URL é: ".$url."\n"; 
	
	$caminho = getCaminho($url);
	
	#"wget "."$line_num"." -P ".'.'.$caminho."\n";
	$url = str_replace(array("\n", "\r"), '', $url);
    	#Joga pro arquivo
    	file_put_contents('URL.txt', "wget "."$url"." -P ".'.'.$caminho."\n", FILE_APPEND);
    	}
}

listFolderFiles('/home/dominio/public_html/cominho');

?>









