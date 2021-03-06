<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\message;
use Session;
class messagesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['store','unreadmailCount']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if($request->type=="all")
        {
          return message::orderBy('id','DESC')->paginate('10',['id','email','fullname','created_at','read']);
        }elseif ($request->type == "read")
        {
          return message::orderBy('id','DESC')->where('read', '0')->paginate('10',['id','email','fullname','created_at','read']);
        }elseif ($request->type=="unread")
        {
          return message::orderBy('id','DESC')->whereNull('read')->paginate('10',['id','email','fullname','created_at','read']);
        }
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
      $messageDB = new message;
      $messageDB->fullname = $request->cfullname;
      $messageDB->email = $request->cemail;
      $messageDB->budget = $request->cbudget;
      $messageDB->message = $request->cmessage;
      $messageDB->save();
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
      $this->read($id);
      return message::where('id',$id)->with('receiver')->get();
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

    }
    public function read($id)
    {
      message::where('id',$id)->update(['read'=>0]);
    }
    public function unreadmailCount()
    {
      return message::whereNull('read')->count();
    }
}
