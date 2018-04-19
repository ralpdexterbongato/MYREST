<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BookMark;
use Auth;
use App\message;
class StatisticController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth:api');
  }
    public function show()
    {
      $totalbookmark=BookMark::where('user_id',Auth::user()->id)->count();
      $totalread = message::where('read', '0')->count();
      $totalunread = message::whereNull('read')->count();
      $totalMessage = message::count();
      $response = array('totalbookmark' =>$totalbookmark ,'read'=>$totalread,'unread'=>$totalunread,'message'=>$totalMessage );
      return response()->json($response);
    }
}
