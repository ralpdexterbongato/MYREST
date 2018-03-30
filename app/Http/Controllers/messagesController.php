<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\message;
use Session;
class messagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return message::paginate('10');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $sent= Session::get('MessagedSentCounter');
      if ($sent>2)
      {
        return ['error'=>'You have reach the maximum send.'];
      }
      $messageDB = new message;
      $messageDB->fullname = $request->cfullname;
      $messageDB->email = $request->cemail;
      $messageDB->budget = $request->cbudget;
      $messageDB->message = $request->cmessage;
      $messageDB->save();
      if (Session::has('MessagedSentCounter'))
      {
        $total = $sent + 1;
        session(['MessagedSentCounter' => $total]);
      }else
      {
        session(['MessagedSentCounter' =>1]);
      }

      return ['success'=>'success'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
