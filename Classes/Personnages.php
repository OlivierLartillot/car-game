<?php

class Personnages 
{

    public $name;
    public $qualite;
    public $image_marqueur;
    public $vie;
    public $vitesseMinimum;
    public $vitesseMaximum;
    public $vitesseMinimum75;
    public $vitesseMaximum75;
    public $vitesseMinimum50;
    public $vitesseMaximum50;
    public $vitesseMinimum25;
    public $vitesseMaximum25;
    public $forceMinimum;
    public $forceMaximum;
    public $fatigueApresFrappeMinimum;
    public $fatigueApresFrappeMaximum;
    public $deApresFrappeMinimum;
    public $deApresFrappeMaximum;



    public function __construct($name = 'default', string $qualite, string $image_marqueur,int $vie,
     int $vitesseMinimum, int $vitesseMaximum, int $vitesseMinimum75, int $vitesseMaximum75,int $vitesseMinimum50, int $vitesseMaximum50, int $vitesseMinimum25, int $vitesseMaximum25,
     int $forceMinimum, int $forceMaximum, 
     int $fatigueApresFrappeMinimum, $fatigueApresFrappeMaximum, int $deApresFrappeMinimum, int $deApresFrappeMaximum)
    {
        $this->name = $name;
        $this->qualite = $qualite;
        $this->image_marqueur = $image_marqueur;
        $this->vie = $vie;
        $this->vitesseMinimum = $vitesseMinimum;
        $this->vitesseMaximum = $vitesseMaximum;
        $this->vitesseMinimum75 = $vitesseMinimum75;
        $this->vitesseMaximum75 = $vitesseMaximum75;
        $this->vitesseMinimum50 = $vitesseMinimum50;
        $this->vitesseMaximum50 = $vitesseMaximum50;
        $this->vitesseMinimum25 = $vitesseMinimum25;
        $this->vitesseMaximum25 = $vitesseMaximum25;
        $this->forceMinimum = $forceMinimum;
        $this->forceMaximum = $forceMaximum;
        $this->fatigueApresFrappeMinimum = $fatigueApresFrappeMinimum;
        $this->fatigueApresFrappeMaximum = $fatigueApresFrappeMaximum;
        $this->deApresFrappeMinimum = $deApresFrappeMinimum;
        $this->deApresFrappeMaximum = $deApresFrappeMaximum;
    }

    function getName() {
        return $this->name;
    }



}

