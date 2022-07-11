<?php

class Personnages 
{

    public $name;
    public $qualite;
    public $image_marqueur;
    public $vitesseMinimum;
    public $vitesseMaximum;
    public $forceMinimum;
    public $forceMaximum;
    public $fatigueApresFrappeMinimum;
    public $fatigueApresFrappeMaximum;
    public $deApresFrappeMinimum;
    public $deApresFrappeMaximum;


    public function __construct($name = 'default', string $qualite, string $image_marqueur, int $vitesseMinimum, int $vitesseMaximum, int $forceMinimum, int $forceMaximum, $fatigueApresFrappeMinimum, $fatigueApresFrappeMaximum, $deApresFrappeMinimum, $deApresFrappeMaximum)
    {
        $this->name = $name;
        $this->qualite = $qualite;
        $this->image_marqueur = $image_marqueur;
        $this->vitesseMinimum = $vitesseMinimum;
        $this->vitesseMaximum = $vitesseMaximum;
        $this->forceMinimum = $forceMinimum;
        $this->forceMaximum = $forceMaximum;
        $this->fatigueApresFrappeMinimum = $fatigueApresFrappeMinimum;
        $this->fatigueApresFrappeMaximum = $fatigueApresFrappeMaximum;
        $this->deApresFrappeMinimum = $deApresFrappeMinimum;
        $this->deApresFrappeMinimum = $deApresFrappeMinimum;
        $this->deApresFrappeMaximum = $deApresFrappeMaximum;
    }

    function getName() {
        return $this->name;
    }



}

