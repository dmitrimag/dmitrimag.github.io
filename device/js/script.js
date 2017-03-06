"use strict";

/* ---------------------------------------------------------------------------------------------------- */
/* ----- VARIABLES ----- */
/* ---------------------------------------------------------------------------------------------------- */

var contactsButton = document.querySelector( ".contacts__button" );
var feedbackForm = document.querySelector( ".feedback" );
var feedbackClose = document.querySelector( ".feedback__close" );

/* ---------- */

var contactsMap = document.querySelector( ".contacts__map" );
var mapModal = document.querySelector( ".map" );
var mapClose = document.querySelector( ".map__close" );

/* ---------------------------------------------------------------------------------------------------- */
/* ----- FUNCTIONS ----- */
/* ----- All functions start with a verb with a capital letter and use CamelCase  ----- */
/* ---------------------------------------------------------------------------------------------------- */

function ShowFeedbackForm( e )
{
	e.preventDefault();
	feedbackForm.classList.add( "visible" );
	feedbackForm.classList.add( "show-popup" );
}

function HideFeedbackForm()
{
	feedbackForm.classList.add( "hide-popup" );
	setTimeout( function()
	{
		feedbackForm.classList.remove( "visible" );
		feedbackForm.classList.remove( "hide-popup" );
	}, 1000);
}

/* ---------- */

function ShowMapModal( e )
{
	e.preventDefault();
	mapModal.classList.add( "visible" );
	mapModal.classList.add( "show-popup" );
}

function HideMapModal()
{
	mapModal.classList.add( "hide-popup" );
	setTimeout( function()
	{
		mapModal.classList.remove( "visible" );
		mapModal.classList.remove( "hide-popup" );
	}, 1000);
}

/* ---------------------------------------------------------------------------------------------------- */
/* ----- INITIALIZING ----- */
/* ----- Can be deprecated ----- */
/* ---------------------------------------------------------------------------------------------------- */

(function()
{
	contactsButton.addEventListener( "click", ShowFeedbackForm, false );
	feedbackClose.addEventListener( "click", HideFeedbackForm, false );

	contactsMap.addEventListener( "click", ShowMapModal, false );
	mapClose.addEventListener( "click", HideMapModal, false );
}
)();