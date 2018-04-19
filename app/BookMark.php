<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class BookMark extends Model
{
  protected $table='book_marks';
  
  public function getCreatedAtAttribute($date)
  {
    return Carbon::createFromFormat('Y-m-d H:i:s',$date)->diffForHumans();
  }
}
