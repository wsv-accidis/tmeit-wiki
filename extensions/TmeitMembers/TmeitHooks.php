<?php
/*
 * TMEIT Members extension for MediaWiki
 *
 * By Wilhelm Svenselius (wilhelm.svenselius@gmail.com)
 */

class TmeitHooks
{
	public static function initUser()
	{
		$memberSync = new TmeitMemberSync();
		$memberSync->initCurrentUserInMediaWiki();
	}
}