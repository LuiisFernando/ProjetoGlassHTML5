function mudaFoto(foto){
		document.getElementById("icone").src = foto;
}

function playStopVideo(filme){
		var mVideo = document.getElementById(filme);
		
		if(mVideo.paused)
			mVideo.play();
		else
			mVideo.pause();
}