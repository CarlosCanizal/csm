<?php
 $section = $_POST["section"];

 if($section=='conceptual01'){
 	$section_label = 'Portafolio | CALENTAMIENTO GLOBAL';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Retoque Digital';
 }
 else if($section=='conceptual02'){
 	$section_label = 'Portafolio  | RAQUETA | PISTOLA | RELOJ';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción | Retoque Digital';
 }
 else if($section=='conceptual03'){
 	$section_label = 'Editorial | GEOGRAFÍA UNIVERSAL';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción';
 }
 else if($section=='conceptual04'){
 	$section_label = 'Portafolio | MOTHER AND ME';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Retoque Digital';
 }
 else if($section == 'producto01'){
 	$section_label = 'Informe Anual | FEMSA COCA-COLA';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción | Retoque Digital';
 }
 else if($section == 'producto02'){
 	$section_label = 'Portafolio  | DANZKA | PORFIDIO | LOS REYES';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción | Retoque Digital';
 }
 else if($section == 'producto03'){
 	$section_label = 'Portafolio  | CORCHO | PIMIENTO | QUESO';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción | Retoque Digital';
 }
 else if ($section=='belleza01'){
 	$section_label = 'Catálogo | AVON';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción | Retoque Digital';
 }
 else if ($section=='belleza02'){
 	$section_label = 'POP | BIOBEL';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción | Retoque Digital';
 }
 else if ($section=='belleza03'){
 	$section_label = 'Catálogo | IU | ANDREA';
	$where = 'León, Guanajuato, México';
	$who = 'Fotografía | Dirección de Arte | Producción  | Retoque Digital';
 }
 else if ($section=='moda05'){
 	$section_label = 'Catálogo | LOLA INTIMATES';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción  | Retoque Digital | Diseño Gráfico | Catálogo';
 }
 else if ($section=='industrial01'){
 	$section_label = 'Informe Anual | CEMEX INTERNACIONAL';
	$where = 'Egipto | Venezuela | Dinamarca';
	$who = 'Fotografía | Dirección de Arte | Producción  | Retoque Digital';
 }
 else if ($section=='industrial02'){
 	$section_label = 'Informe Anual | IMSA';
	$where = 'Monterrey, México';
	$who = 'Fotografía | Dirección de Arte | Producción';
 }
 else if ($section=='corporativo01'){
 	$section_label = 'Informe Anual  | CORPORATIVO 1 y 2 | FELIPE CALDERÓN';
	$where = 'México, DF';
	$who = 'Fotografía | Dirección de Arte | Producción | Retoque Digital';
 }
 else if ($section=='naturaleza01'){
 	$section_label = 'Portafolio | MARIPOSAS | RÍO | CIUDAD';
	$where = 'Michoacan | Chiapas | Distrito Federal, México, DF';
	$who = 'Fotografía | Dirección de Arte | Retoque Digital';
 }
 else if ($section=='moda01'){
 	$section_label = 'Informe Anual | FASHION GROUP | SAMSUNG | BENEFUL';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción  | Retoque Digital';
 }
 else if ($section=='moda02'){
 	$section_label = 'Catálago | PIELES HANSON';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción | Retoque Digital | Diseño | Catálogo | Posters';
 }
 else if ($section=='moda03'){
 	$section_label = 'Catálogo | VITOS';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción  | Retoque Digital | Diseño Gráfico | Catálogo | Posters | POP';
 }
 else if ($section=='moda04'){
 	$section_label = 'Catálogo | LIVERPOOL';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción | Retoque Digital ';
 }
 else if ($section=='moda05'){
 	$section_label = 'Catálogo | LOLA INTIMATES';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción  | Retoque Digital | Diseño Gráfico | Catálogo';
 }
 else if ($section=='moda06'){
 	$section_label = 'Catálogo | LIVERPOOL';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción | Retoque Digital ';
 }
 else if ($section=='moda07'){
 	$section_label = 'Publicidad | ANA BEHABIK';
	$where = 'Estudio';
	$who = 'Fotografía | Dirección de Arte | Producción | Retoque Digital';
 }
 else if ($section=='moda08'){
 	$section_label = 'Editorial | OHM';
	$where = 'Estudio';
	$who = 'Produccion | Retoque Digital';
 }
 else if ($section=='moda09'){
 	$section_label = 'Editorial | SWISHY';
	$where = 'Estudio';
	$who = 'Dirección de Arte | Producción | Retoque Digital';
 }

 	$image1 = 'gallery/'.$section.'_small_01.jpg';
	$image1_large = 'gallery/'.$section.'_large_01.jpg';
	$image2 = 'gallery/'.$section.'_small_02.jpg';
	$image2_large = 'gallery/'.$section.'_large_02.jpg';
	$image3 = 'gallery/'.$section.'_small_03.jpg';
	$image3_large = 'gallery/'.$section.'_large_03.jpg';

	$image1 = "<div class='galleryBox' img-large='".$image1_large."' ><img alt='' src='".$image1."'/></div>";
	$image2 = "<div class='galleryBox' img-large='".$image2_large."'><img  alt='' src='".$image2."'/></div>";
	$image3 = "<div class='galleryBox' img-large='".$image3_large."'><img alt='' src='".$image3."'/></div>";


?>
<div id='<?=$section?>'>
		<div class='content'>
			<div class='gallery'>
					<?=$image1?>
					<?=$image2?>
					<?=$image3?>
				<div class='clear'></div>
			</div>
			<div class='section-text'>
				<div class='title'><?=$section_label?></div>
				<div class='title'><?=$where?></div>
				<div class='title'><?=$who?></div>
				<!-- <div class='textDescription'>
					Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
				</div> -->
			</div>
		</div><!--content-->
	</div><!--sectionHide-->
