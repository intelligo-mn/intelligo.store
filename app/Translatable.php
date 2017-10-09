<?php
namespace App;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Database\Query\Builder as QueryBuilder;

trait Translatable {
    
    protected $currentLocale = null;
    
    public function translate ($locale) {
        $this->currentLocale = $locale;
        return $this;
    }
    
    public function isAttributeTranslatable ($key) {
        if (isset($this->translatables)) {
            return in_array($key, $this->translatables);
        }
        return false;
    }
    
    public function getDefaultLocale () {
        if ($this->currentLocale == null) {
            $this->currentLocale = \App::getLocale();
        }
        return $this->currentLocale;
    }
    
    public function getAttribute ($key) {
        $locale = $this->getDefaultLocale();
        $this->currentLocale = null;
        if ($this->isAttributeTranslatable($key)) {
            return parent::getAttribute($key.'_'.$locale);
        }
        return parent::getAttribute($key);
    }
    
    public function setAttribute ($key, $value) {
        $locale = $this->getDefaultLocale();
        $this->currentLocale = null;
        if ($this->isAttributeTranslatable($key)) {
            return parent::setAttribute($key.'_'.$locale, $value);
        }
        return parent::setAttribute($key, $value);
    }
    
    /**
     * This scope filters results by checking the translation fields.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @param string                                $key
     * @param string                                $value
     * @param string                                $locale
     *
     * @return \Illuminate\Database\Eloquent\Builder|static
     */
    public function scopeWhereTranslated (Builder $query, $key, $value, $locale = null) {
        $locale = $this->getDefaultLocale();
        $this->currentLocale = null;
        if ($this->isAttributeTranslatable($key)) {
            return $query->where($key.'_'.$locale, $value);
        }
        return $query->where($key, $value);
    }
}