<?php

use Illuminate\Database\Seeder;
use App\User;
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
    }
}
