<?php

use Phalcon\Validation\Validator\PresenceOf,
    Phalcon\Mvc\Model\Validator\Email as EmailValidator,
    Phalcon\Mvc\Model\Validator\Uniqueness as UniquenessValidator,
    Phalcon\Mvc\Model\Validator\StringLength as StringLengthValidator;

class Users extends Base
{

    /**
     *
     * @var integer
     */
    public $id;

    /**
     *
     * @var string
     */
    public $username;

    /**
     *
     * @var string
     */
    public $password;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var string
     */
    public $lastname;

    /**
     *
     * @var string
     */
    public $country;

    /**
     *
     * @var string
     */
    public $gender;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'users';
    }

    public function initialize()
    {
        $this->hasMany('id', 'Games', 'id_user', array('alias' => 'Games'));
    }
    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Users[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Users
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
