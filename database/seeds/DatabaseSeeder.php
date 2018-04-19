<?php

use Illuminate\Database\Seeder;
use App\User;
use App\message;
class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $userDB = new User;
        $userDB->name = 'Ralp Dexter Bongato';
        $userDB->email = 'ralpdexterbongato@gmail.com';
        $userDB->password = bcrypt('admin');
        $userDB->save();
        for ($i=0; $i < 20; $i++) { 
          $message = new message;
          $message->fullname = "John Doo";
          $message->email = "rdc2898@gmail.com";
          $message->budget = "200,000 - 300,000";
          $message->message = "Lorem ipsum dolor sit amet, consecte incididunt ut labore et dol";
          $message->save();
        }

    }
}
